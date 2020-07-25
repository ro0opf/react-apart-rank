package com.apt_rank.springboot.domain.apt;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@NoArgsConstructor
@Entity
@Table
public class AptRankSearch {

    @Id
    @Column(length=5, nullable = false, name = "s_apt_name")
    private String s_apt_name;

    @Column(length=5, nullable = false, name = "my_k_rank")
    private String my_k_rank;

    @Column(length=5, nullable = false, name = "k_total")
    private String k_total;

    @Column(length=5, nullable = false, name = "my_gu_rank")
    private String my_gu_rank;

    @Column(length=5, nullable = false, name = "gu_total")
    private String gu_total;

    @Column(length=5, nullable = false, name = "s_trans_yymm")
    private String s_trans_yymm;

    @Column(length=5, nullable = false, name = "s_address1")
    private String s_address1;

    @Column(length=5, nullable = false, name = "s_address2")
    private String s_address2;

    @Column(length=5, nullable = false, name = "s_address3")
    private String s_address3;

    @Column(length=5, nullable = false, name = "gu_ex_price")
    private String gu_ex_price;

    @Column(length=5, nullable = false, name = "gu_ex_apt_name")
    private String gu_ex_apt_name;

    @Column(length=5, nullable = false, name = "gu_ex_trans_yymm")
    private String gu_ex_trans_yymm;

    @Column(length=5, nullable = false, name = "gu_ex_address3")
    private String gu_ex_address3;

    @Column(length=5, nullable = false, name = "gu_cp_price")
    private String gu_cp_price;

    @Column(length=5, nullable = false, name = "gu_cp_apt_name")
    private String gu_cp_apt_name;

    @Column(length=5, nullable = false, name = "gu_cp_trans_yymm")
    private String gu_cp_trans_yymm;

    @Column(length=5, nullable = false, name = "gu_cp_address3")
    private String gu_cp_address3;

    @Column(length=5, nullable = false, name = "k_ex_price")
    private String k_ex_price;

    @Column(length=5, nullable = false, name = "k_ex_apt_name")
    private String k_ex_apt_name;

    @Column(length=5, nullable = false, name = "k_ex_trans_yymm")
    private String k_ex_trans_yymm;

    @Column(length=5, nullable = false, name = "k_ex_address1")
    private String k_ex_address1;

    @Column(length=5, nullable = false, name = "k_ex_address2")
    private String k_ex_address2;

    @Column(length=5, nullable = false, name = "k_ex_address3")
    private String k_ex_address3;

    @Column(length=5, nullable = false, name = "k_cp_price")
    private String k_cp_price;

    @Column(length=5, nullable = false, name = "k_cp_apt_name")
    private String k_cp_apt_name;

    @Column(length=5, nullable = false, name = "k_cp_trans_yymm")
    private String k_cp_trans_yymm;

    @Column(length=5, nullable = false, name = "k_cp_address1")
    private String k_cp_address1;

    @Column(length=5, nullable = false, name = "k_cp_address2")
    private String k_cp_address2;

    @Column(length=5, nullable = false, name = "k_cp_address3")
    private String k_cp_address3;

}
