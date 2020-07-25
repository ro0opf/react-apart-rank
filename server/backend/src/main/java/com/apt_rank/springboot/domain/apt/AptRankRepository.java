package com.apt_rank.springboot.domain.apt;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AptRankRepository extends JpaRepository<AptRankSearch, String> {

    @Query(value = "WITH K_LIST AS(\n" +
            "\tSELECT ROW_NUMBER() OVER (ORDER BY h1.unit_price DESC, h1.trans_yymmdd) AS ranking, \n" +
            "\t\th1.trans_price, \n" +
            "\t\th1.unit_price, \n" +
            "\t\th1.apt_name, \n" +
            "\t\th1.trans_yymm, \n" +
            "\t\th1.addr_dong_nm,\n" +
            "\t\th1.addr_pr_cd,\n" +
            "\t\th1.addr_ct_cd,\n" +
            "        (SELECT arcd.province_nm \n" +
            "            FROM apt_region_cd_dtl arcd \n" +
            "            WHERE arcd.province_cd  = h1.addr_pr_cd\n" +
            "                and arcd.city_cd = h1.addr_ct_cd) AS address_1,\n" +
            "        (select arcd.city_nm    \n" +
            "            from apt_region_cd_dtl arcd \n" +
            "            where arcd.city_cd      = h1.addr_ct_cd\n" +
            "                and arcd.province_cd  = h1.addr_pr_cd) AS address_2,\n" +
            "        h1.addr_dong_nm as address_3\n" +
            "\tFROM apt_trans_price_dtl h1\n" +
            "\tWHERE trans_yymmdd = (SELECT MAX(h2.trans_yymmdd)  \n" +
            "\t\t\t\t\t\t\tFROM apt_trans_price_dtl h2 \n" +
            "\t\t\t\t\t\t\tWHERE h1.apt_name = h2.apt_name\n" +
            "                                AND h1.addr_pr_cd = h2.addr_pr_cd\n" +
            "                                AND h1.addr_ct_cd = h2.addr_ct_cd\n" +
            "\t\t\t\t\t\t)\n" +
            ")\n" +
            ",\n" +
            "-- 여기서 전국 순위\n" +
            "K_RANK as(\n" +
            "\tSELECT \tK.ranking my_k_rank\n" +
            "\t\t\t, (SELECT MAX(K2.ranking) FROM K_LIST k2) k_total\n" +
            "\tFROM \tK_LIST K \n" +
            "\tWHERE \tK.apt_name = ?1 --입력 받을 아파트 값\n" +
            "),\n" +
            "K_EX_APT as(\n" +
            "    SELECT  K.trans_price as k_ex_price\n" +
            "        , K.apt_name as k_ex_apt_name\n" +
            "        , K.trans_yymm as k_ex_trans_yymm\n" +
            "        , K.address_1 as k_ex_address1\n" +
            "        , K.address_2 as k_ex_address2\n" +
            "        , K.address_3 as k_ex_address3\n" +
            "    FROM    K_LIST K\n" +
            "    WHERE   K.ranking = 1\n" +
            ")\n" +
            ",\n" +
            "K_CP_APT as(\n" +
            "    SELECT  K.trans_price \tas k_cp_price\n" +
            "        , K.apt_name \t\tas k_cp_apt_name\n" +
            "        , K.trans_yymm \t\tas k_cp_trans_yymm\n" +
            "        , K.address_1 \t\tas k_cp_address1\n" +
            "        , K.address_2 \t\tas k_cp_address2\n" +
            "        , K.address_3 \t\tas k_cp_address3\n" +
            "    FROM    K_LIST K, K_RANK k_rank\n" +
            "    WHERE   K.ranking = k_rank.k_total\n" +
            "),\n" +
            "-- 로컬 리스트 뽑고\n" +
            "LOCAL_LIST AS(\n" +
            "\tSELECT \tROW_NUMBER() OVER (ORDER BY K.unit_price desc, K.trans_yymm) as l_ranking,\n" +
            "\t\t\tK.trans_price, \n" +
            "\t\t\tK.unit_price, \n" +
            "\t\t\tK.apt_name, \n" +
            "\t\t\tK.trans_yymm, \n" +
            "\t\t\tK.addr_dong_nm,\n" +
            "\t\t\tK.addr_pr_cd,\n" +
            "\t\t\tK.addr_ct_cd,\n" +
            "            K.address_1,\n" +
            "            K.address_2,\n" +
            "            K.address_3\n" +
            "\tFROM\tK_LIST K\n" +
            "\tWHERE\tK.addr_pr_cd = ?2 --입력 받을 값\n" +
            "\t\tAND K.addr_ct_cd = ?3 -- 입력 받을 값\n" +
            "),\n" +
            "-- 로컬 순위\n" +
            "LOCAL_RANK AS(\n" +
            "\tSELECT \tL.l_ranking as my_gu_rank\n" +
            "\t\t\t, (SELECT MAX(L2.l_ranking) FROM LOCAL_LIST L2) gu_total\n" +
            "            , L.trans_yymm as s_trans_yymm\n" +
            "            , L.apt_name as s_apt_name\n" +
            "            , L.address_1 as s_address1\n" +
            "            , L.address_2 as s_address2\n" +
            "            , L.address_3 as s_address3\n" +
            "\tFROM\tLOCAL_LIST L\n" +
            "\tWHERE\tL.apt_name = ?4 --입력 받을 아파트 값\n" +
            "),\n" +
            "-- 구내 최고가\n" +
            "GU_EX_APT as(\n" +
            "    SELECT  gu.trans_price as gu_ex_price\n" +
            "        , gu.apt_name as gu_ex_apt_name\n" +
            "        , gu.trans_yymm as gu_ex_trans_yymm\n" +
            "        , gu.address_3 as gu_ex_address3\n" +
            "    FROM    LOCAL_LIST gu\n" +
            "    WHERE   gu.l_ranking = 1\n" +
            "),\n" +
            "-- 구내 최저가\n" +
            "GU_CP_APT AS (\n" +
            "    SELECT  gu.trans_price as gu_cp_price\n" +
            "        , gu.apt_name as gu_cp_apt_name\n" +
            "        , gu.trans_yymm as gu_cp_trans_yymm\n" +
            "        , gu.address_3 as gu_cp_address3\n" +
            "    FROM    LOCAL_LIST gu, LOCAL_RANK gu_rank\n" +
            "    WHERE   gu.l_ranking = gu_rank.gu_total\n" +
            ")\n" +
            "SELECT K_RANK.*, LOCAL_RANK.*, GU_EX_APT.*, GU_CP_APT.*, K_EX_APT.*, K_CP_APT.*\n" +
            "FROM K_RANK, LOCAL_RANK, K_EX_APT, K_CP_APT, GU_EX_APT, GU_CP_APT", nativeQuery = true)
    AptRankSearch findRankByApt_Name(String apt_name_f, String pr_cd, String ct_cd, String apt_name_s);

}
