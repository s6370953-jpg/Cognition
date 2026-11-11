function Button({
  variant = 'primary',
  className = '',
  type = 'button',
  href,
  ...props
}) {
  const classes = ['button', `button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return <a className={classes} href={href} {...props} />
  }

  return <button className={classes} type={type} {...props} />
}

export default Button
