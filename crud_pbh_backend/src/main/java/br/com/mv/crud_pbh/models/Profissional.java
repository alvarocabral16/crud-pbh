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
@Getter
@Setter
@Entity
public class Profissional {
		
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id_profissional;
	private String nome;
	private String endereco;
	private String telefone;
	private String celular;
	private String funcao;
	
}
