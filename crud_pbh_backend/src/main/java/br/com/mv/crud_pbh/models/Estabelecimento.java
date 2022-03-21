package br.com.mv.crud_pbh.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
public class Estabelecimento {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id_estabelecimento;
	private String razsocial;
	private String endereco;
	private String telefone;
	
}
