package com.stackroute.service;

import com.stackroute.customExceptions.TicketAlreadyExistsException;
import com.stackroute.domain.Ticket;
import com.stackroute.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class TicketServiceImpl implements TicketService {
    @Autowired
    private TicketRepository ticketRepository;
    @Override
    public Ticket saveRepos(Ticket ticket) throws TicketAlreadyExistsException {
        if(ticketRepository.existsById(ticket.getTicketNumber()))
        {
            throw new TicketAlreadyExistsException("Track is already Present");
        }
        Ticket savedTicket = ticketRepository.save(ticket);
        if(savedTicket == null)
        {
            throw new TicketAlreadyExistsException("Track is already Present");
        }
        return savedTicket;

    }

    @Override
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();

    }
//    private static final String FILE_DIRECTORY = "/home/cgi/Desktop/FrexApp/backendEcofriendly/files";
//    @Override
//    public void storeFile(MultipartFile file) throws IOException {
//
//        Path filePath = Paths.get(FILE_DIRECTORY + "/" + file.getOriginalFilename());
//
////        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
//    }
}
