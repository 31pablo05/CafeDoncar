#!/usr/bin/env node

// Script para generar sitemap.xml automáticamente
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración del sitio
const config = {
  baseUrl: 'https://cafedoncar.vercel.app',
  outputPath: path.join(__dirname, '../public/sitemap.xml')
};

// URLs del sitio con sus propiedades
const urls = [
  {
    loc: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    loc: '/#menu',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: '/#about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/#reviews',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.7'
  },
  {
    loc: '/#horarios',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: '/#contacto',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/#delivery',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.6'
  }
];

// Generar XML del sitemap
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  urls.forEach(url => {
    sitemap += `
  <url>
    <loc>${config.baseUrl}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Escribir el archivo sitemap.xml
function writeSitemap() {
  const sitemapContent = generateSitemap();
  
  try {
    fs.writeFileSync(config.outputPath, sitemapContent, 'utf8');
    console.log('✅ Sitemap generado exitosamente en:', config.outputPath);
    console.log('📄 URLs incluidas:', urls.length);
    console.log('🌐 Base URL:', config.baseUrl);
  } catch (error) {
    console.error('❌ Error al generar sitemap:', error);
    process.exit(1);
  }
}

// Ejecutar si se llama directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  writeSitemap();
}

export { generateSitemap, writeSitemap, config, urls };