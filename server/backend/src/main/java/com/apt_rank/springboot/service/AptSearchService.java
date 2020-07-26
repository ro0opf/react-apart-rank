package com.apt_rank.springboot.service;

import com.apt_rank.springboot.domain.apt.AptRankRepository;
import com.apt_rank.springboot.domain.apt.AptRankSearch;
import com.apt_rank.springboot.domain.apt.AptRepository;
import com.apt_rank.springboot.domain.apt.AptTransPriceHst;
import com.apt_rank.springboot.web.dto.AptRankDto;
import com.apt_rank.springboot.web.dto.AptSearchDto;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class AptSearchService {

    private final AptRepository aptRepository;
    private final AptRankRepository aptRankRepository;

    public List<AptSearchDto> findByAptName(String apt_name){

//        List<AptTransPriceHst> entity = aptRepository.findByApt_Name(apt_name);
        return aptRepository.findByApt_Name(apt_name).stream().map(AptSearchDto::new).collect(Collectors.toList());
    }

    public AptRankDto findRankByApt_Name(String apt_name, String region_cd, String dong_cd){

        String pr_cd = region_cd.substring(0,2);
        String ct_cd = region_cd.substring(2,5);

        AptRankSearch entity = aptRankRepository.findRankByApt_Name(apt_name, pr_cd, ct_cd, apt_name);

        return new AptRankDto(entity);
    }


}
