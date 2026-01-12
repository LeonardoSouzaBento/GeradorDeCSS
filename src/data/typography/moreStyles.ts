export const moreCSSStyles = `/* LARGURA MÁXIMA DO CORPO */
p {max-width: 65ch;}
@media (min-width: 640px){p {max-width: 73ch;}}
@media (min-width: 768px){p {max-width: 75ch;}}
@media (min-width: 1024px){p {max-width: 78ch;}}
@media (min-width: 1280px){p {max-width: 82ch;}}
@media (min-width: 1536px){p {max-width: 85ch;}}

/* PESOS */
input::placeholder {
  font-weight: 300; /* light */
}

.helper-text,
.description-text {
  font-weight: 300;
}

p, li, input, select, option {
  font-weight: 400;
}

a, h6, h5, h4, button, 
.small-button, .big-link, .small-link {
  font-weight: 500;
}

h3, h2 { font-weight: 600;}

h1, strong { font-weight: 700;}

/* LINE HEIGHTS */
.h1-hero { line-height: 1.1; }
h1 { line-height: 1.17; }
h2 { line-height: 1.22; }
h3 { line-height: 1.28; }
h4 { line-height: 1.32; }
h5 { line-height: 1.38; }
h6 { line-height: 1.44; }

p,
li,
input,
select,
option {
  @apply leading-normal;
}
label { @apply leading-[1.36]; }
button { @apply leading-[1.12]; }

.large-text { line-height: 1.68; }
.normal-text { line-height: 1.5; }

.large-text { @apply leading-[1.45]; }
.normal-text { @apply leading-[1.48]; }
.small-text { @apply leading-[1.51]; }
.smaller-text { @apply leading-[1.54]; }
`;

export const moreTwStyles = `@layer components { 
/* LARGURA MÁXIMA DO CORPO */ 
p { 
  @apply max-w-[65ch] sm:max-w-[73ch] 
  md:max-w-[75ch] lg:max-w-[78ch] xl:max-w-[82ch] 
  2xl:max-w-[85ch]; 
}

/* PESOS */
input::placeholder, .helper-text, 
.description-text { 
  @apply font-light; 
} 

p, li, input, select, option { 
  @apply font-normal; 
} 

a, h6, h5, h4 { 
  @apply font-medium; 
}

button, label, .small-button, 
.big-link, .small-link { 
  @apply font-medium; 
} 

h3, h2 { 
  @apply font-semibold; 
}

h1, strong { 
  @apply font-bold; 
} 

/* LINE HEIGHTS */ 
.h1-hero { @apply leading-[1.1]; } 
h1 { @apply leading-[1.22]; } 
h2 { @apply leading-[1.24]; } 
h3 { @apply leading-[1.28]; } 
h4 { @apply leading-[1.32]; } 
h5 { @apply leading-[1.38]; } 
h6 { @apply leading-[1.44]; } 

p, li, input, select, option { 
  @apply leading-[1.52]; 
} 

label { @apply leading-[1.35];} 

button { 
  @apply leading-[1.15]; 
} 

.large-text { @apply leading-[1.68]; } 
.normal-text { @apply leading-normal; } 
.small-text { @apply leading-[1.6]; } 
.smaller-text { @apply leading-normal; } 

.large-button { @apply leading-[1.20]; } 
.small-button { @apply leading-[1.10]; } }
`;
