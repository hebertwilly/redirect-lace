// MAPA
const map = L.map('map');


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© OpenStreetMap contributors'
}).addTo(map);


const locais = [
{
nome: 'Unidade Itaporanga',
lat: -23.70459008249988,
lng: -49.483677732266244,
endereco: 'R. Bom Jesus, 767 - Centro,',
cidade: 'Itaporanga - SP',
tel: '(15) 3565-3613'
},
{
nome: 'Unidade Coronel Macedo',
lat: -23.631361982332105,
lng: -49.31388872479831,
endereco: 'Av. Pres. Castelo Branco, 393 - Centro,',
cidade: 'Coronel Macedo - SP',
tel: '(15) 99703-4509'
},
{
nome: 'Unidade Taguaí',
lat: -23.453174352712416,
lng: -49.41033358599541,
endereco: 'R. João Floriano Martins, 230 - Centro,',
cidade: 'Taguaí - SP',
tel: '(14) 98810-1944'
},
{
nome: 'Unidade Itaí',
lat: -23.42203474477331,
lng: -49.08664956539818,
endereco: 'Av. Antônio Justino Vieira, 420 - Jardim Planalto,',
cidade: 'Itaí - SP',
tel: '(14) 99655-5554'
},
{
nome: 'Unidade Fartura',
lat: -23.3904029,
lng: -49.5143599,
endereco: 'Rua Arthur de Andrade - Centro, 18870-000,',
cidade: 'Fartura - SP',
tel: '(14)3382-4032'
}
];


const grupoMarcadores = locais.map(local =>
L.marker([local.lat, local.lng])
.bindPopup(`
<div style="line-height: 1.5">
<strong>${local.nome}</strong><br>
<span>📍 ${local.endereco}</span><br>
<span>📞 ${local.tel}</span><br>
<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local.endereco + local.cidade)}" target="_blank">🧭 Visualizar Rotas</a>
</div>
`)
);


const featureGroup = L.featureGroup(grupoMarcadores).addTo(map);


const center = featureGroup.getBounds().getCenter();
map.setView(center, 9);