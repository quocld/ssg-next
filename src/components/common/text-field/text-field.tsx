import classNames from 'classnames'
import { createElement } from 'react'
import { FiArrowRight } from 'react-icons/fi'

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export default function TextField({
  placeholder = '',
  ...rest
}: TextFieldProps) {
  return (
    <div className='relative w-full'>
      <input
        {...rest}
        type='text'
        className={classNames(
          'w-full rounded-lg border border-white bg-white px-[14px] py-[18.5px] pr-[50px] text-base font-medium text-black',
          rest.className
        )}
        placeholder={placeholder}
      />
      <button
        type='button'
        className='absolute right-[14px] top-1/2 -translate-y-1/2 text-black hover:text-gray-600'
      >
        {createElement(FiArrowRight, { size: 24 })}
      </button>
    </div>
  )
}
