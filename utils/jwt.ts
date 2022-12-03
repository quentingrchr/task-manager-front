import { IJwtPayload } from '@interfaces'
import { setCookie, getCookie } from '../utils'
import { useState, useEffect } from 'react'

export function setJwt(jwt: string): void {
  const diffInSeconds = parseJwt(jwt).exp - parseJwt(jwt).iat
  const diffInDays = diffInSeconds / 86400

  setCookie('jwt', jwt, diffInDays)
}

export function getJwt(): IJwtPayload | null {
  const jwt = getCookie('jwt')
  if (jwt) {
    return parseJwt(jwt)
  } else {
    return null
  }
}

export function parseJwt(token: string): IJwtPayload {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}
