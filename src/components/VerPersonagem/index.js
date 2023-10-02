import React, { useEffect, useState } from 'react'
import { getPersonagem } from './../../../pegar_dados'
import { Text, View, TextInput, Button, Image } from 'react-native'
import { estilo } from './style'

export function VerPersonagem() {
    const [nome, setNome] = useState('')
    const [personagem, setPersonagem] = useState('')
    const [erro, setErro] = useState('')
    async function carregaPersonagem() {
        let personagens = await getPersonagem(nome)
        setPersonagem('')
        try {
            let imagem = personagens[0].image
            setPersonagem(personagens[0])
        }
        catch {
            setErro('Não existe este personagem')
        }

    }
    return (
            <View style={estilo.container}>
                <View style={estilo.container}>
                    <TextInput placeholder='nome...' onChangeText={setNome} style={estilo.input}/>
                    <Button style={estilo.botao} title='Ver Personagem' onPress={carregaPersonagem} />
                    <Text>Rodolfo Adijarlan - Turma: 513</Text>
                    {personagem!=''?
                    <View style={estilo.container}>
                        <Image  style={estilo.imagemE} source={{ uri: personagem.image }} resizeMode='contain'/>
                        <Text>{personagem.character}</Text>
                        <Text>{personagem.quote}</Text>
                    </View>:<Text>{erro}</Text>}
                </View>
            </View>
    )
}