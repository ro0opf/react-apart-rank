package com.apt_rank.springboot.domain.apt;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AptRepository extends JpaRepository<AptTransPriceHst, String> {

    @Query(value = "    SELECT ROWNUM as id, apt_list_output.*\n" +
            "    FROM    (\n" +
            "            select\n" +
            "                    apt_name as name,\n" +
            "                   (select arcd.province_nm\n" +
            "                    from apt_region_cd_dtl arcd\n" +
            "                    where arcd.province_cd  = h1.addr_pr_cd\n" +
            "                    and arcd.city_cd = h1.addr_ct_cd" +
            "                    and arcd.dong_cd = h1.addr_dong_cd) as address_1,\n" +
            "                   (select arcd.city_nm\n" +
            "            from apt_region_cd_dtl arcd\n" +
            "                    where arcd.city_cd      = h1.addr_ct_cd\n" +
            "                    and arcd.province_cd  = h1.addr_pr_cd\n" +
            "                    and arcd.dong_cd = h1.addr_dong_cd) as address_2,\n" +
            "                    addr_dong_nm as address_3,\n" +
            "                   (addr_pr_cd || addr_ct_cd) as region_cd,\n" +
            "                   addr_dong_cd as dong_cd\n" +
            "                   from apt_trans_price_dtl h1\n" +
            "            where 1=1\n" +
            "                   and h1.apt_name like %?1%\n" +
            "                   and trans_yymm = (select max(h2.trans_yymm) from apt_trans_price_dtl h2 where h2.apt_name = h1.apt_name)\n" +
            "            group by     apt_name,\n" +
            "                   addr_pr_cd,\n" +
            "                   addr_ct_cd,\n" +
            "                   addr_dong_cd,\n" +
            "                   addr_dong_nm\n" +
            "    ) apt_list_output", nativeQuery = true)
    List<AptTransPriceHst> findByApt_Name(String apt_name);



}
