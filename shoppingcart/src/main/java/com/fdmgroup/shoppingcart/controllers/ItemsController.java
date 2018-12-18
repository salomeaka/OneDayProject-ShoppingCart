package com.fdmgroup.shoppingcart.controllers;


import com.fdmgroup.shoppingcart.models.Item;
import com.fdmgroup.shoppingcart.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/")
public class ItemsController {

    @Autowired
    ItemRepository itemRepository;

    @RequestMapping(value = "items", method = RequestMethod.GET)
    public List<Item> list(){
        return itemRepository.findAll();
    }

    @RequestMapping(value = "items", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Item item){
        itemRepository.save(item);
    }

    @RequestMapping(value = "items/{id}", method = RequestMethod.GET)
    public Optional<Item> get(@PathVariable("id") long id){
        return itemRepository.findById(id);
    }


}
