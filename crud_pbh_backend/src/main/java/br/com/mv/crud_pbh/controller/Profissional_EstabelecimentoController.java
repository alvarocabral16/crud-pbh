package br.com.mv.crud_pbh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mv.crud_pbh.models.Profissional_Estabelecimento;
import br.com.mv.crud_pbh.repository.Profissional_EstabelecimentoRepository;

@RestController
@RequestMapping("/listar")
public class Profissional_EstabelecimentoController {
	
	@Autowired
	private Profissional_EstabelecimentoRepository lr;
	
	@GetMapping
	public List<Profissional_Estabelecimento> pesquisar(){
		return lr.findAll();
	}

}
