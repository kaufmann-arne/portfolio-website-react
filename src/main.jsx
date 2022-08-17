import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as THREE from 'three'
import gsap from 'gsap'
import vertexShader from './shaders/vertex.glsl?url'
import fragmentShader from './shaders/fragment.glsl?url'
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl?url'
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl?url'
import Tagcloud from './tagcloud2.min.js?url'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
