package br.com.mv.crud_pbh.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mv.crud_pbh.models.Estabelecimento;
import br.com.mv.crud_pbh.repository.EstabelecimentoRepository;

@RestController
@RequestMapping("/estabelecimento")
public class EstabelecimentoController {
	
	@Autowired
	private EstabelecimentoRepository er;
	
	@GetMapping
	public List<Estabelecimento> pesquisar(){
		return er.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Estabelecimento> buscar(@PathVariable Long id) {
		return er.findById(id);
	}
   
	@PostMapping
	public Estabelecimento salvar(@RequestBody Estabelecimento estabelecimento) {
		return er.save(estabelecimento);
	}
	
	@PutMapping
	public Estabelecimento editar(@RequestBody Estabelecimento estabelecimento) {
		return er.save(estabelecimento);
	}
		 
	@DeleteMapping("/{id}")
	public void deletar(@PathVariable Long id) {
		er.deleteById(id);
	}

}
