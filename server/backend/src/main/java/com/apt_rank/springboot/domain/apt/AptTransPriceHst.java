package com.apt_rank.springboot.domain.apt;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Getter
@NoArgsConstructor
@Entity
@IdClass(AptTransPriceHst_Id.class)
@Table(name="apt_trans_price_hst")
public class AptTransPriceHst {

    @Id
    @Column(length=40, nullable = false, name = "apt_name")
    private String apt_name;
    @Id
    @Column(length=6, nullable = false, name = "trans_yymm")
    private String trans_yymm;
    @Id
    @Column(length=5, nullable = false, name = "addr_region_cd")
    private String addr_region_cd;
    @Id
    @Column(length=6, nullable = false, name = "trans_dd")
    private String trans_dd;

    @Column(length=14, nullable = true, name = "serial_num")
    private String serial_num;
    @Column(length=14, nullable = true, name = "apt_floor")
    private String apt_floor;
    @Column(length=20, nullable = true, name = "apt_capacity")
    private int apt_capacity;
    @Column(length=4, nullable = true, name = "apt_build_yy")
    private String apt_build_yy;
    @Column(length=40, nullable = true, name = "trans_price")
    private String apt_trans_price;
    @Column(length=20, nullable = true, name = "addr_cd")
    private String addCd;
    @Column(length=5, nullable = true, name = "addr_dong_cd")
    private String addrDong_cd;
    @Column(length=40, nullable = true, name = "addr_dong_nm")
    private String addr_dong_nm;
    @Column(nullable = false, name = "audit_dtm")
    private Date audit_dtm;
    @Column(length=10, nullable = false, name = "audit_id")
    private String audit_id;

}
