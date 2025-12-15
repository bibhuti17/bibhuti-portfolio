import { useRive } from "@rive-app/react-canvas";

export default function RiveButton() {
  const { RiveComponent } = useRive({
    src: "/rive-button.riv", // TODO: replace Rive asset
    autoplay: true
  });

  return (
    <div className="w-40 h-12">
      <RiveComponent />
    </div>
  );
}
