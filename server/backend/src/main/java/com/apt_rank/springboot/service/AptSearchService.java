package com.apt_rank.springboot.service;

import com.apt_rank.springboot.domain.apt.AptRepository;
import com.apt_rank.springboot.domain.apt.AptTransPriceHst;
import com.apt_rank.springboot.web.dto.AptSearchDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class AptSearchService {

    private final AptRepository aptRepository;

    public List<AptTransPriceHst> findByAptName(String apt_name){

        return aptRepository.findByApt_Name(apt_name);
//        return new AptSearchDto(entity);
    }
}
