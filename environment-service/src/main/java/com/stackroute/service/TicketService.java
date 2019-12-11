package com.stackroute.service;


import com.stackroute.customExceptions.TicketAlreadyExistsException;
import com.stackroute.domain.Ticket;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface TicketService {
    public Ticket saveRepos(Ticket ticket) throws TicketAlreadyExistsException;

    public List<Ticket> getAllTickets();
//    public void storeFile(MultipartFile file) throws IOException;

}