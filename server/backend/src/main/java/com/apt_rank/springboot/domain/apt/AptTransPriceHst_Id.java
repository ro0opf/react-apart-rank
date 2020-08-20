package com.apt_rank.springboot.domain.apt;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class AptTransPriceHst_Id implements Serializable {

    private String name;
    private String region_cd;
    private String dong_cd;

}
