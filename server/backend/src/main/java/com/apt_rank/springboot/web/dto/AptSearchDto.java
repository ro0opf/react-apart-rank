package com.apt_rank.springboot.web.dto;

import com.apt_rank.springboot.domain.apt.AptTransPriceHst;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class AptSearchDto {

    private String name;
    private String region_cd;
    private String dong_cd;
    private String id;
    private String address_1;
    private String address_2;
    private String address_3;

    // 가격정보 및 구&동 정보 갱신 필요
    public AptSearchDto(AptTransPriceHst entity){
        this.name      = entity.getName     ();
        this.region_cd = entity.getRegion_cd();
        this.dong_cd   = entity.getDong_cd  ();
        this.id        = entity.getId       ();
        this.address_1 = entity.getAddress_1();
        this.address_2 = entity.getAddress_2();
        this.address_3 = entity.getAddress_3();
        if(this.address_3.contains(" ")){
            this.address_3 = this.address_3.replaceAll(" ", "");
        }
    }

}
