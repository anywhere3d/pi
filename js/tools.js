THREE.BufferGeometryUtils={fromGeometry:function(n,t){var e,r,u,l,o,s;if(n instanceof THREE.BufferGeometry)return n;t=t||{vertexColors:THREE.NoColors};var p=n.vertices,c=n.faces,y=n.faceVertexUvs,w=t.vertexColors,ft=y[0].length>0,ht=c[0].vertexNormals.length==3,h=new THREE.BufferGeometry;h.attributes={position:{itemSize:3,array:new Float32Array(c.length*9)},normal:{itemSize:3,array:new Float32Array(c.length*9)}},e=h.attributes.position.array,r=h.attributes.normal.array,w!==THREE.NoColors&&(h.attributes.color={itemSize:3,array:new Float32Array(c.length*9)},u=h.attributes.color.array),ft===!0&&(h.attributes.uv={itemSize:2,array:new Float32Array(c.length*6)},l=h.attributes.uv.array);for(var v=0,a=0,i=0;v<c.length;v++,a+=6,i+=9){var f=c[v],b=p[f.a],k=p[f.b],d=p[f.c];if(e[i]=b.x,e[i+1]=b.y,e[i+2]=b.z,e[i+3]=k.x,e[i+4]=k.y,e[i+5]=k.z,e[i+6]=d.x,e[i+7]=d.y,e[i+8]=d.z,ht===!0){var g=f.vertexNormals[0],nt=f.vertexNormals[1],tt=f.vertexNormals[2];r[i]=g.x,r[i+1]=g.y,r[i+2]=g.z,r[i+3]=nt.x,r[i+4]=nt.y,r[i+5]=nt.z,r[i+6]=tt.x,r[i+7]=tt.y,r[i+8]=tt.z}else o=f.normal,r[i]=o.x,r[i+1]=o.y,r[i+2]=o.z,r[i+3]=o.x,r[i+4]=o.y,r[i+5]=o.z,r[i+6]=o.x,r[i+7]=o.y,r[i+8]=o.z;if(w===THREE.FaceColors)s=f.color,u[i]=s.r,u[i+1]=s.g,u[i+2]=s.b,u[i+3]=s.r,u[i+4]=s.g,u[i+5]=s.b,u[i+6]=s.r,u[i+7]=s.g,u[i+8]=s.b;else if(w===THREE.VertexColors){var it=f.vertexColors[0],rt=f.vertexColors[1],ut=f.vertexColors[2];u[i]=it.r,u[i+1]=it.g,u[i+2]=it.b,u[i+3]=rt.r,u[i+4]=rt.g,u[i+5]=rt.b,u[i+6]=ut.r,u[i+7]=ut.g,u[i+8]=ut.b}if(ft===!0){var et=y[0][v][0],ot=y[0][v][1],st=y[0][v][2];l[a]=et.x,l[a+1]=et.y,l[a+2]=ot.x,l[a+3]=ot.y,l[a+4]=st.x,l[a+5]=st.y}}return h.computeBoundingSphere(),h}};var Detector={canvas:!!window.CanvasRenderingContext2D,webgl:function(){try{var n=document.createElement("canvas");return!!window.WebGLRenderingContext&&(n.getContext("webgl")||n.getContext("experimental-webgl"))}catch(t){return!1}}(),workers:!!window.Worker,fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob,getWebGLErrorMessage:function(){var n=document.createElement("div");return n.id="webgl-error-message",n.style.fontFamily="monospace",n.style.fontSize="13px",n.style.fontWeight="normal",n.style.textAlign="center",n.style.background="#fff",n.style.color="#000",n.style.padding="1.5em",n.style.width="400px",n.style.margin="5em auto 0",this.webgl||(n.innerHTML=window.WebGLRenderingContext?'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL<\/a>.<br />\nFind out how to get it <a href="http://get.webgl.org/" style="color:#000">here<\/a>.':'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL<\/a>.<br/>\nFind out how to get it <a href="http://get.webgl.org/" style="color:#000">here<\/a>.'),n},addGetWebGLMessage:function(n){var i,r,t;n=n||{},i=n.parent!==undefined?n.parent:document.body,r=n.id!==undefined?n.id:"oldie",t=Detector.getWebGLErrorMessage(),t.id=r,i.appendChild(t)}}