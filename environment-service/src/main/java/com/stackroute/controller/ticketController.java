package com.stackroute.controller;

import com.stackroute.customExceptions.TicketAlreadyExistsException;
import com.stackroute.domain.Ticket;
import com.stackroute.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="api/v1")
public class ticketController {
    @Autowired
    TicketService ticketService;
    ResponseEntity responseEntity;

    public ticketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }
    @PostMapping("saveTicket")
    ResponseEntity <?> saveRepo(@RequestBody Ticket ticket)
    {
        try{
            ticketService.saveRepos(ticket);
            responseEntity = new ResponseEntity<String>("Successfully created", HttpStatus.CREATED);
        }catch (TicketAlreadyExistsException e)
        {
            responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
    @GetMapping("/getTicket")
    public ResponseEntity<?> getAllRepos() {

        try
        {

            responseEntity = new ResponseEntity<List<Ticket>>(ticketService.getAllTickets(),HttpStatus.OK);
        }catch(Exception e)
        {
            responseEntity = new ResponseEntity<String>(e.getMessage(),HttpStatus.CONFLICT);
        }
        return responseEntity;
    };


}
