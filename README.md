# 📅 Componente de Calendário com Seleção de Intervalo de Datas

Um componente React moderno e elegante para seleção de intervalos de datas, construído com Next.js, TypeScript e Tailwind CSS.

## ✨ Características

- 🎯 Seleção intuitiva de intervalo de datas
- 📱 Design responsivo e adaptável
- 🌍 Localização em Português do Brasil
- 🎨 Tema personalizável
- 🔄 Opções flexíveis de visualização (1-3 meses)
- 🛡️ Totalmente tipado com TypeScript
- 🎭 Integração com Radix UI para acessibilidade
- 🎯 Validação de datas embutida

## 🚀 Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- date-fns
- Radix UI
- React Hook Form
- Zod (validação)

## 📦 Instalação

```bash
# Clone o repositório
git clone [URL_DO_REPOSITÓRIO]

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 💻 Como Usar

```typescript
import { DateRangeCalendar } from "@/components/date-range-calendar";

function MinhaAplicacao() {
  return (
    <div>
      <DateRangeCalendar />
    </div>
  );
}
```

## 🔧 Configurações Disponíveis

O componente oferece as seguintes opções de configuração:

- Seleção do número de meses visíveis (1-3 meses)
- Formatação personalizada de datas
- Seleção de intervalo com validação automática
- Interface totalmente em português

## 🎯 Funcionalidades Principais

1. **Seleção de Intervalo**

   - Escolha datas de início e fim
   - Visualização clara do período selecionado
   - Validação automática do intervalo

2. **Visualização Flexível**

   - Opção de visualizar 1, 2 ou 3 meses
   - Navegação intuitiva entre os meses
   - Layout responsivo

3. **Formatação de Datas**
   - Exibição em formato brasileiro (dd/MM/yyyy)
   - Suporte a diferentes formatos de exibição
   - Localização completa em português

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter pull requests.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎯 Exemplos de Uso

```typescript
// Exemplo básico
<DateRangeCalendar />

// Com evento de mudança personalizado
<DateRangeCalendar
  onChange={(range) => {
    console.log("Data inicial:", range.from)
    console.log("Data final:", range.to)
  }}
/>
```

## 🔍 Estrutura do Projeto

```
components/
├── date-range-calendar.tsx    # Componente principal
├── ui/                        # Componentes de UI reutilizáveis
└── theme-provider.tsx         # Provedor de tema

lib/
└── utils.ts                   # Utilitários e helpers
```

## ⚡ Performance

O componente foi otimizado para:

- Renderização eficiente
- Mínimo de re-renders
- Bundle size otimizado
- Carregamento sob demanda

## 📱 Suporte a Dispositivos

- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

## 🐛 Reportando Problemas

Encontrou um bug? Por favor, abra uma issue descrevendo:

1. O problema encontrado
2. Passos para reproduzir
3. Comportamento esperado
4. Screenshots (se aplicável)

## 🔮 Roadmap

- [ ] Suporte a temas personalizados
- [ ] Mais opções de localização
- [ ] Animações aprimoradas
- [ ] Modos de visualização adicionais

---

Desenvolvido com ❤️ por Pedro Wesley, usando Next.js e TypeScript
