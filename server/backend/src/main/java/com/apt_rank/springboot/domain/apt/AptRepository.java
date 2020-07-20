package com.apt_rank.springboot.domain.apt;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AptRepository extends JpaRepository<AptTransPriceHst, String> {

    @Query(value = "select * from apt_trans_price_hst b where b.apt_name like %?1%", nativeQuery = true)
    List<AptTransPriceHst> findByApt_Name(String apt_name);

}
