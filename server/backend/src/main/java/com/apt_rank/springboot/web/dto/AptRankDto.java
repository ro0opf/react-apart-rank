package com.apt_rank.springboot.web.dto;

import com.apt_rank.springboot.domain.apt.AptRankSearch;
import com.apt_rank.springboot.domain.apt.AptTransPriceHst;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class AptRankDto {

    public enum RankType{
     /*
        CALCULATE RANKING
        상위 5% : DIA
        상위 10% : PLATINUM
        상위 20% : GOLD
        상위 30% : SILVER
        나머지 : BRONZE
     */
        TOP5PER("DIA"),
        TOP10PER("PLATINUM"),
        TOP20PER("GOLD"),
        TOP30PER("SILVER"),
        ELSEPER("BRONZE");

        final private String name;

        private RankType(String name){
            this.name = name;
        }

        public String getName(){
            return name;
        }
    }

    // 변환 대상
    private String gu_tier;
    private String k_tier;

    // Query 값 그대로
    private String s_apt_name;
    private String s_trans_yymm;
    private String s_address1;
    private String s_address2;
    private String s_address3;
    private String gu_ex_price;
    private String gu_ex_apt_name;
    private String gu_ex_trans_yymm;
    private String gu_ex_address3;
    private String gu_cp_price;
    private String gu_cp_apt_name;
    private String gu_cp_trans_yymm;
    private String gu_cp_address3;
    private String k_ex_price;
    private String k_ex_apt_name;
    private String k_ex_trans_yymm;
    private String k_ex_address1;
    private String k_ex_address2;
    private String k_ex_address3;
    private String k_cp_price;
    private String k_cp_apt_name;
    private String k_cp_trans_yymm;
    private String k_cp_address1;
    private String k_cp_address2;
    private String k_cp_address3;

    public AptRankDto(AptRankSearch entity){

        int gu_rank_cl = Math.round(Integer.parseInt(entity.getMy_gu_rank()) / Integer.parseInt(entity.getGu_total()) * 100);
        int kr_rank_cl = Math.round(Integer.parseInt(entity.getMy_k_rank()) / Integer.parseInt(entity.getK_total()) * 100);

        // 구내 랭킹 계산
        if(gu_rank_cl <= 5){
            gu_tier = RankType.valueOf("TOP5PER").getName();
        }else if(gu_rank_cl > 5 && gu_rank_cl <= 10){
            gu_tier = RankType.valueOf("TOP10PER").getName();
        }else if(gu_rank_cl > 10 && gu_rank_cl <= 20){
            gu_tier = RankType.valueOf("TOP15PER").getName();
        }else if(gu_rank_cl > 20 && gu_rank_cl <= 30){
            gu_tier = RankType.valueOf("TOP30PER").getName();
        }else{
            gu_tier = RankType.valueOf("ELSEPER").getName();
        }

        // 전국 랭킹 계산
        if(kr_rank_cl <= 5){
            k_tier = RankType.valueOf("TOP5PER").getName();
        }else if(kr_rank_cl > 5 && kr_rank_cl <= 10){
            k_tier = RankType.valueOf("TOP10PER").getName();
        }else if(kr_rank_cl > 10 && kr_rank_cl <= 20){
            k_tier = RankType.valueOf("TOP15PER").getName();
        }else if(kr_rank_cl > 20 && kr_rank_cl <= 30){
            k_tier = RankType.valueOf("TOP30PER").getName();
        }else{
            k_tier = RankType.valueOf("ELSEPER").getName();
        }

        this.s_apt_name				= entity.getS_apt_name			();
        this.s_trans_yymm			= entity.getS_trans_yymm		();
        this.s_address1				= entity.getS_address1			();
        this.s_address2				= entity.getS_address2			();
        this.s_address3				= entity.getS_address3			();
        this.gu_ex_price			= entity.getGu_ex_price		    ();
        this.gu_ex_apt_name			= entity.getGu_ex_apt_name		();
        this.gu_ex_trans_yymm		= entity.getGu_ex_trans_yymm	();
        this.gu_ex_address3			= entity.getGu_ex_address3		();
        this.gu_cp_price			= entity.getGu_cp_price		    ();
        this.gu_cp_apt_name			= entity.getGu_cp_apt_name		();
        this.gu_cp_trans_yymm		= entity.getGu_cp_trans_yymm	();
        this.gu_cp_address3			= entity.getGu_cp_address3		();
        this.k_ex_price				= entity.getK_ex_price			();
        this.k_ex_apt_name			= entity.getK_ex_apt_name		();
        this.k_ex_trans_yymm		= entity.getK_ex_trans_yymm		();
        this.k_ex_address1			= entity.getK_ex_address1		();
        this.k_ex_address2			= entity.getK_ex_address2		();
        this.k_ex_address3			= entity.getK_ex_address3		();
        this.k_cp_price				= entity.getK_cp_price			();
        this.k_cp_apt_name			= entity.getK_cp_apt_name		();
        this.k_cp_trans_yymm		= entity.getK_cp_trans_yymm		();
        this.k_cp_address1			= entity.getK_cp_address1		();
        this.k_cp_address2			= entity.getK_cp_address2		();
        this.k_cp_address3			= entity.getK_cp_address3		();

    }

}
