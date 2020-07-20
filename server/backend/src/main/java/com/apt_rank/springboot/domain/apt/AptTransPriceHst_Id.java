package com.apt_rank.springboot.domain.apt;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
public class AptTransPriceHst_Id implements Serializable {

    private String apt_name;
    private String trans_yymm;
    private String addr_region_cd;
    private String trans_dd;

}
