package com.apt_rank.springboot.domain.apt;

import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
@IdClass(AptTransPriceHst_Id.class)
@Table(name="apt_trans_price_dtl")
public class AptTransPriceHst {

    @Id
    @Column(length=40, nullable = false, name = "name")
    private String name;
    @Id
    @Column(length=5, nullable = false, name = "region_cd")
    private String region_cd;
    @Id
    @Column(length=5, nullable = false, name = "dong_cd")
    private String dong_cd;

    @Column(length=20, nullable = true, name = "id")
    private String id;

    @Column(length=20, nullable = true, name = "address_1")
    private String address_1;

    @Column(length=20, nullable = true, name = "address_2")
    private String address_2;

    @Column(length=20, nullable = true, name = "address_3")
    private String address_3;

}
