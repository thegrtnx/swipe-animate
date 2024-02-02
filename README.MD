# ✨ SWIPE-ANIMATE

![stacked](https://raw.githubusercontent.com/thegrtnx/internet-speed-check/master/img/lightmode.png)

This is a [typescript](https://www.typescriptlang.org/) project created by [`Abolade Greatness`](https://github.com/thegrtnx) and [`VickyJay`](https://github.com/Victorola-coder) helping you animate text in a swipe up manner just like the one below;

## 🔧 Installation

```bash
npm i swipe-animate

```

I'll provide support for other packages with time. Happy to collaborate with anyone. 🤝

## 😍 Features

- Easy to set up for real, you can make it work in less than 10sec!
- Super easy to customize
- Set custom duration with choice
- Create custom array of words
- Typescript supported

## The gist

- JSX

```jsx
import React from "react";
import { Swipe } from "swipe-animate";

const page = () => {
	const arrayOfWords: string[] = ["Awesome!", "Genius!", "Intelligent!", "Prodigy!", "Him!", "Amazing!", "Terrific!", "Broke!"];

	return (
		<div>
			{" "}
			<Swipe
				words={arrayOfWords}
				intervalDuration={4000}
			/>
		</div>
	);
};

export default page;
```

- TSX

```tsx
"use client";
import React from "react";
import { Swipe } from "swipe-animate";

const page = () => {
	const arrayOfWords: string[] = ["Awesome!", "Genius!", "Intelligent!", "Prodigy!", "Him!", "Amazing!", "Terrific!", "Broke!"];

	return (
		<div>
			{" "}
			<Swipe
				words={arrayOfWords}
				intervalDuration={4000}
			/>
		</div>
	);
};

export default page;
```

## 🚀 Demo

https://korahq.com/#move-money || https://simple-text-animation-gold.vercel.app/

## 🤝 Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

You can also find me on [twitter](https://twitter.com/thegrtnx) and [Linkedin](https://www.linkedin.com/in/thegrtnx). My pseudo is [thegrtnx].

## 🤐 License

Licensed under MIT