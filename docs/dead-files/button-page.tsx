// import { FontSelector, Header } from '@/components/index';
// import { ButtonsData, buttonsData } from '@/data/buttons/variables';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
//   H6Title,
//   HeaderH6,
//   WrapperForm,
// } from '@/ui/index';
// import { MousePointerClick } from 'lucide-react';
// import { useRef, useState } from 'react';
// import ColorGenerator from '../../src/pages/button-page/components/color-palette/color-generator';
// import {
//   FirstPrev,
//   InitialSize,
//   RelativeSizes,
//   WeightSelector,
// } from '../../src/pages/button-page/components/font-styles/index';
// import {
//   AdjustmentInputs,
//   ColorInput,
//   LineThickness,
//   PaddingXInput,
//   ResultPreview,
//   SizeInputs,
// } from '../../src/pages/button-page/components/padding-generator/index';

// export const wrapperStyles = 'border rounded-lg p-5 pt-[1.5ex] bg-card';

// export default function ButtonPage() {
//   const [color, setColor] = useState('#05318a');
//   const [textContrastColor, setTextContrastColor] = useState<string>('');
//   const [currentWeight, setCurrentWeight] = useState(600);
//   const [initialFontSize, setInitialFontSize] = useState(17);
//   const [relativeSizeScale, setRelativeSizeScale] = useState<string[]>(['0.9', '0.95', '1']);
//   const [currentButtonsData, setCurrentButtonsData] = useState<ButtonsData[]>(buttonsData);
//   const [lineThickness, setLineThickness] = useState('2');
//   const [paddingX, setPaddingX] = useState('0.85');
//   const typographyDivRef = useRef<HTMLDivElement>(null);

//   return (
//     <div>
//       <Header
//         page="buttons"
//         title="Gerador de estilos para botões"
//         description="Estilize seus botões mais rapidamente"
//         icon={<MousePointerClick />}
//       />
//       <main className={`main-wrapper space-y-6 mb-8`}>
//         <Card>
//           <CardHeader>
//             <CardTitle>Tamanhos e estilos</CardTitle>
//             <CardDescription>Defina o tamanho do botão com padding</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-5 xl:grid xl:grid-cols-2 xl:gap-5 xl:space-y-0">
//             <div className="space-y-5">
//               <SizeInputs
//                 currentButtonsData={currentButtonsData}
//                 setCurrentButtonsData={setCurrentButtonsData}
//               />
//               <div className="space-y-5 sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-5">
//                 <LineThickness lineThickness={lineThickness} setLineThickness={setLineThickness} />
//                 <ColorInput color={color} setColor={setColor} />
//               </div>
//             </div>
//             <div className="space-y-5">
//               <AdjustmentInputs
//                 initialFontSize={initialFontSize}
//                 currentButtonsData={currentButtonsData}
//                 setCurrentButtonsData={setCurrentButtonsData}
//               />
//               <WrapperForm className={`flex flex-col gap-3`}>
//                 <HeaderH6 mb={0}>
//                   <H6Title>
//                     <h6>Prévia</h6>
//                   </H6Title>
//                 </HeaderH6>

//                 <ResultPreview
//                   currentButtonsData={currentButtonsData}
//                   initialFontSize={initialFontSize}
//                   currentWeight={currentWeight}
//                   color={color}
//                   lineThickness={lineThickness}
//                   textContrastColor={textContrastColor}
//                   paddingX={paddingX}
//                   typographyDivRef={typographyDivRef}
//                 />
//               </WrapperForm>
//             </div>
//             <PaddingXInput paddingX={paddingX} setPaddingX={setPaddingX} />
//           </CardContent>
//         </Card>

//         <Card className={`max-h-max`} ref={typographyDivRef}>
//           <CardHeader>
//             <CardTitle>Tipografia</CardTitle>
//             <CardDescription>Defina fonte, tamanhos e peso</CardDescription>
//           </CardHeader>
//           <CardContent className={`flex flex-col gap-5`}>
//             <div className="space-y-5 xl:grid xl:grid-cols-2 xl:gap-5 xl:space-y-0">
//               <FontSelector page="button-page" />
//               <div
//                 className={`space-y-5 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 
//                 xl:grid-cols-1 xl:grid-rows-2 xl:space-y-0`}>
//                 <InitialSize
//                   styles={wrapperStyles}
//                   initialFontSize={initialFontSize}
//                   setInitialFontSize={setInitialFontSize}
//                 />
//                 <WeightSelector
//                   styles={wrapperStyles}
//                   currentWeight={currentWeight}
//                   setCurrentWeight={setCurrentWeight}
//                 />
//               </div>
//             </div>

//             <div className="space-y-5 xl:grid xl:grid-cols-2 xl:gap-5">
//               <RelativeSizes
//                 relativeSizeScale={relativeSizeScale}
//                 setRelativeSizeScale={setRelativeSizeScale}
//                 setCurrentButtonsData={setCurrentButtonsData}
//               />
//               <div className="space-y-5">
//                 <FirstPrev>
//                   <ResultPreview
//                     currentButtonsData={currentButtonsData}
//                     initialFontSize={initialFontSize}
//                     currentWeight={currentWeight}
//                     color={color}
//                     lineThickness={lineThickness}
//                     textContrastColor={textContrastColor}
//                     paddingX={paddingX}
//                     editingTypography
//                   />
//                 </FirstPrev>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>CSS de padding</CardTitle>
//           </CardHeader>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Cores recomendadas</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ColorGenerator baseColor={color} setTextContrastColor={setTextContrastColor} />
//           </CardContent>
//         </Card>
//       </main>
//     </div>
//   );
// }
