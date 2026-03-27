export default function makeImageKitUrl(
  rawUrl: string,
  width = 400,
  quality = 75,
) {
  const IK_BASE = "https://ik.imagekit.io/mahdi84q/tarkhineh";
  const TRANSFORM = `tr:w-${width},q-${quality}`;
  return `${IK_BASE}/${TRANSFORM}/${rawUrl}`;
}
