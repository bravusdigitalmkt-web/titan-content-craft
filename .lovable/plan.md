## Objetivo
Os 6 vídeos da seção "Catálogo em Vídeo" não rodam no site publicado como rodam no preview. O arquivo está OK no CDN (testei, retorna 200 com `video/mp4`), então o problema é comportamento de autoplay + versão publicada antiga.

## O que vou fazer

### 1. Tornar o autoplay robusto em celular (`src/routes/index.tsx`, componente `VideoCatalog`)
- Trocar autoplay "burro" por **IntersectionObserver**: o vídeo só dá `play()` quando entra na tela, e dá `pause()` quando sai. Isso evita 6 vídeos competindo ao mesmo tempo, que é o que mata o autoplay no Safari iOS e Chrome Android.
- Remover `controls` (causa conflito com autoplay no iOS) e colocar um **overlay com botão Play** que aparece se o navegador bloquear o autoplay — clicar dá play com som.
- Manter `muted`, `playsInline`, `loop`, `preload="metadata"` (obrigatórios pra autoplay mobile).
- Adicionar `disableRemotePlayback` e `disablePictureInPicture` pra evitar UI estranha do iOS.

### 2. Publicar a versão nova
Depois do ajuste, te aviso pra clicar em **Publish** — o site publicado atual provavelmente é de antes dos vídeos serem adicionados, e por isso "não roda no site mas roda aqui".

## Fora de escopo
- Não vou mexer em nenhuma outra seção, nem no layout do grid, nem nos textos.
- Não vou trocar os vídeos por outros formatos (HLS etc.) — o MP4 do CDN tá funcionando.

## Como validar
Depois de publicar, abro o site publicado com Playwright (mobile viewport), confirmo que os `<video>` estão com `readyState >= 2` e tocando após scroll até a seção.
