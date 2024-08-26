HTTPS e Postman - Exercício
Caso não lembre como funciona o processo de entrega, clique aqui

O que você precisa saber e praticar desta aula?
Como usar o Postman
Leitura da documentação da API
Como fazer requisições para uma API e seus métodos
Como eu vou executar os exercícios?
Hoje vamos treinar requisições usando o Postman e a API do Labefy. Link para a documentação da API

Exercício 1
Antes de tudo leia toda a documentação com muita atenção
Abra a coleção de requisições da API no Postman (Prática 0 da aula)
Exercício 2
Crie três playlists .
Verifique se elas foram criadas corretamente.
Adicione duas músicas em cada uma delas.
Verifique se as músicas foram adicionadas corretamente.
Exercício 3
Pesquise por uma das playlists que você criou.
Remova uma música de uma playlist.
Delete outra playlist.




respostas

{
  "name": "Playlist 1"
}
GET /playlists
{
  "name": "Song 1",
  "artist": "Artist 1",
  "url": "https://link-to-song1.com"
}
GET /playlists/{playlist_id}/tracks
GET /playlists/{playlist_id}
DELETE /playlists/{playlist_id}/tracks/{track_id}
DELETE /playlists/{playlist_id}
