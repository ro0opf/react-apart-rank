package com.apt_rank.springboot.web.dto;

import com.apt_rank.springboot.domain.apt.AptTransPriceHst;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class AptSearchDto {

    private String apt_name;
    private String city;
    private String gu;
    private String dong;

    // 가격정보 및 구&동 정보 갱신 필요
    public AptSearchDto(AptTransPriceHst entity){
        this.apt_name = entity.getApt_name();
        this.gu = entity.getAddr_region_cd();
        this.dong = entity.getAddr_dong_nm();
        this.city = entity.getAddr_region_cd();
    }

}
