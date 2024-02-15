# Horizontal Timeline

A simple horizontal timeline component made with React.

This is an re-implementation using design composition, typescript and responsive CSS of the [Horizontal Timeline](<[text](https://github.com/mailtop/horizontal-timeline)>) from [mailtop](<[text](https://github.com/mailtop)>).

Thank you guys for the original work ❤️.

## Installation

```bash
# with npm
npm install @reactuiutils/horizontal-timeline
```

```bash
# with yarn
yarn add @reactuiutils/horizontal-timeline
```

```bash
# with pnpm
pnpm i @reactuiutils/horizontal-timeline
```

## Usage

```jsx
import {
  Action,
  Event,
  Subtitle,
  Timeline,
  Title,
} from '@reactuiutils/horizontal-timeline';
import { FaBug, FaRegCalendarCheck } from 'react-icons/fa'; // or any other icon

export const MyTimeline = () => {
  return (
    <Timeline minEvents={6}>
      {/* Without action */}
      <Event color="#87a2c7" icon={FaRegCalendarCheck}>
        <Title>Agendado</Title>
        <Subtitle>26/03/2019 09:51</Subtitle>
      </Event>

      {/* With action */}
      <Event color="red" icon={FaBug}>
        <Title>Erro</Title>
        <Subtitle>26/03/2019 09:51</Subtitle>
        <Action onClick={() => alert('clicou')}>Detalhes</Action>
      </Event>

      {/* Without title, subtitle and action */}
      <Event color="darkGreen" icon={FaRegCalendarCheck} />
    </Timeline>
  );
};
```

## Preview

![preview image](https://raw.githubusercontent.com/renanlido/timeline-horizontal/main/public/img/image.png)

## Props

### Timeline

The `Timeline` component is used to render a horizontal timeline.

#### Props

- `minEvents` (number): The minimum number of events to display on the timeline. If the rendered events are less than this number, the timeline will be render fallbacks instead to complete the total number.

### Event

The `Event` component represents an event on the timeline.

#### Props

- `color` (string): The color of the event.
- `icon` (ReactNode): The icon to display for the event. Any valid SVG component can be used.

### Title

The `Title` component represents the title of an event.

### Subtitle

The `Subtitle` component represents the subtitle of an event.

### Action

The `Action` component represents an action associated with an event.

#### Props

- `onClick` (function): The function to be called when the action is clicked.

## License

```
## License

MIT

```

## Contributing

Feel free to contribute to this project. Any help is welcome.

### Developmet

1. Clone the repository
2. Install the dependencies using `pnpm i` on root folder
3. To Run the lib on development mode use `pnpm lib dev` on root folder
4. To Run the example on development mode use `pnpm example-vite dev` on root folder
5. To build the lib use `pnpm lib build` on root folder

#### Folders

- `lib` - `/lib` - The library source code
- `example-vite` - `/examples/example-with-vite` - The example source code

## Technologies and Tools

- [React](<[text](https://reactjs.org)>) - A JavaScript library for building user interfaces
- [TypeScript](<[text](https://www.typescriptlang.org)>) - A typed superset of JavaScript that compiles to plain JavaScript
- [Vite](<[text](https://vitejs.dev)>) - A build tool that aims to provide a faster and leaner development experience for modern web projects
- [pnpm](<[text](https://pnpm.io)>) - A fast, disk space efficient package manager
- [Tailwind CSS](<[text](https://tailwindcss.com)>) - A utility-first CSS framework for rapidly building custom designs

This project are planned to be an monorepo using pnpm-workspaces.

## Author

- [renanlido](<[text](https://github.com/renanlido)>) - Renan Oliveira

## Acknowledgments

- [mailtop](<[text](https://github.com/mailtop)>) - Original work
- [guilhermeoholz](<[text](https://github.com/mailtop)>) - Original work
