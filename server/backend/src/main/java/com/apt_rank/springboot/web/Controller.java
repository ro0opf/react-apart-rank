package com.apt_rank.springboot.web;

import com.apt_rank.springboot.domain.apt.AptRankSearch;
import com.apt_rank.springboot.domain.apt.AptTransPriceHst;
import com.apt_rank.springboot.service.AptSearchService;
import com.apt_rank.springboot.web.dto.AptRankDto;
import com.apt_rank.springboot.web.dto.AptSearchDto;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/apart")
public class Controller {

    private final AptSearchService aptSearchService;

    @GetMapping("/")
    public String index(){
        return "apt_rank";
    }


//    @GetMapping("/apt")
//    @RequestMapping
//    public List<JSONObject> handleAptName(@RequestParam("apart_name") String apt_name, Model map){
//        map.addAttribute("msg", "employees request by dept: " + apt_name);
//
//        List<JSONObject> out = new ArrayList<>();
//
//        for(int i=1; i<3; i++){
//            JSONObject json = new JSONObject();
//            json.put("id", 1);
//            json.put("name", "롯데 시그니엘 "+i+"차");
//            json.put("address1", "서울시");
//            json.put("address2", "강동구");
//            json.put("address3", "천호동");
//
//            out.add(json);
//        }
//
//
//        return out;
//    }

    @RequestMapping
    public List<AptTransPriceHst> handleAptList_Search(@RequestParam("apart_name") String apt_name){

        return aptSearchService.findByAptName(apt_name);
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public AptRankDto handleAptName_dup(@RequestParam("apart_name") String apt_name,
                                        @RequestParam("rc") String region_cd,
                                        @RequestParam("dc") String dong_cd){

        // 검색된 아파트 정보는 ranking 테이블에 쌓는 로직 필요
        // 저장해뒀다가 한번에 처리하는 방식으로

        return aptSearchService.findRankByApt_Name(apt_name, region_cd);
    }


}
