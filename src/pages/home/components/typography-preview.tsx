import { WrapperForm } from '@/ui';

const bodyVariables = `body {
@apply text-[1.05rem] sm:text-[1.0625rem] md:text-[1.065rem] lg:text-[1.07rem] xl:text-[1.075rem] 2xl:text-[1.0800rem];
}`;

const textVariables = `@theme {
  --text-xs: 0.878357em;
  --text-sm: 0.937207em;
  --text-base: 1.00em;
  --text-lg: 1.067em;
  --text-h6: 1.067em;
  --text-h5: 1.138489em;
  --text-h4: 1.214768em;
  --text-h3: 1.296157em;
  --text-h2: 1.38300em;
  --text-h1: 1.475661em;
  --text-h1-hero: 1.574530em;
  --text-button: 0.968095em;
  --text-sm-button: 0.937207em;
  --text-lg-button: 1.00em;
}`;

const TypographyPreview = () => {
  return (
    <WrapperForm>
      <h3 className="mb-[0.75ex]">Gerador de escala tipográfica </h3>
      <div className={`mb-4`}>
        <p>Gere a escala tipográfica do seu projeto</p>
        <div className={`flex flex-wrap items-baseline gap-3`}>
          <h1>Aa</h1>
          <h2>Aa</h2>
          <h3>Aa</h3>
          <h4>Aa</h4>
          <h5>Aa</h5>
          <h6>Aa</h6>
          <p className="text-lg">Aa</p>
          <p className="text-base">Aa</p>
          <p className="text-sm">Aa</p>
          <p className="text-xs">Aa</p>
        </div>
      </div>
      <div className={`space-y-4`}>
        <pre>{bodyVariables}</pre>
        <pre>{textVariables}</pre>
      </div>
    </WrapperForm>
  );
};

export default TypographyPreview;
