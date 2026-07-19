// Your real pixel-art icons, dropped inline with text the same way
// you'd use an emoji. Source files live in public/assets/.

function PixelIcon({ src, label }) {
  return (
    <img
      src={src}
      alt={label}
      className="pixel-icon"
      width={28}
      height={28}
    />
  )
}

export const Icon = {
  Cube:   (p) => <PixelIcon src="/assets/icon-cube.png"   label="product" {...p} />,
  Type:   (p) => <PixelIcon src="/assets/icon-type.png"   label="design" {...p} />,
  Coffee: (p) => <PixelIcon src="/assets/icon-coffee.png" label="location" {...p} />,
  Bulb:   (p) => <PixelIcon src="/assets/icon-bulb.png"   label="create" {...p} />,
  Book:   (p) => <PixelIcon src="/assets/icon-book.png"   label="storytelling" {...p} />,
  Mail:   (p) => <PixelIcon src="/assets/icon-mail.png"   label="hire" {...p} />,
  Chat:   (p) => <PixelIcon src="/assets/icon-chat.png"   label="collaboration" {...p} />,
}