export const outputExample = `@theme {
...
--text-base: 1em;
--text-xs: 0.933255em;
--text-sm: 0.995783em;
--text-lg: 1.133687em;
...
}

@layer components {
body {
@apply text-[1.06250rem] sm:text-[1.09375rem] md:text-[1.10000rem] lg:text-[1.11250rem] xl:text-[1.12500rem] 2xl:text-[1.13750rem]
}

.big-h1 {
@apply text-[1.67294rem] sm:text-[1.72214rem] md:text-[1.73198rem] lg:text-[1.75166rem] xl:text-[1.77135rem] 2xl:text-[1.79103rem]
}

h1 {
@apply text-[1.56789rem] sm:text-[1.61400rem] md:text-[1.62323rem] lg:text-[1.64167rem] xl:text-[1.66012rem] 2xl:text-[1.67856rem]
}

h2 {
@apply text-[1.46944rem] sm:text-[1.51266rem] md:text-[1.52130rem] lg:text-[1.53859rem] xl:text-[1.55587rem] 2xl:text-[1.57316rem]
}

h3 {
@apply text-[1.37717rem] sm:text-[1.41767rem] md:text-[1.42577rem] lg:text-[1.44198rem] xl:text-[1.45818rem] 2xl:text-[1.47438rem]
}

h4 {
@apply text-[1.29069rem] sm:text-[1.32865rem] md:text-[1.33624rem] lg:text-[1.35143rem] xl:text-[1.36661rem] 2xl:text-[1.38180rem]
}

h5 {
@apply text-[1.20965rem] sm:text-[1.24522rem] md:text-[1.25234rem] lg:text-[1.26657rem] xl:text-[1.28080rem] 2xl:text-[1.29503rem]
}

h6 {
@apply text-[1.13369rem] sm:text-[1.16703rem] md:text-[1.17370rem] lg:text-[1.18704rem] xl:text-[1.20037rem] 2xl:text-[1.21371rem]
}

.large-text {
@apply text-[1.133687em];
}

.normal-text {
@apply text-[1.00em];
}

.small-text {
@apply text-[0.995783em];
}

.smaller-text {
@apply text-[0.933255em];
}

button {
@apply text-[0.95em];
}

.small-button {
@apply text-[0.90em];
}

.large-button {
@apply text-[1.00em];
} 
}`;
