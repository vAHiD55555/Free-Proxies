function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.176:5455",
        "SOCKS 103.220.23.57:3128",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 36.255.98.165:11272",
        "SOCKS 62.60.131.179:8715",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 62.60.131.189:19702",
        "SOCKS 62.60.131.178:4149",
        "SOCKS 62.60.131.205:4126",
        "SOCKS 36.255.98.165:4982",
        "SOCKS 62.60.131.183:4039",
        "SOCKS 36.255.98.163:8168",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 62.60.131.179:7008",
        "SOCKS 36.255.98.178:5102",
        "SOCKS 36.255.98.177:5197",
        "SOCKS 62.60.131.185:4251",
        "SOCKS 193.181.35.179:8118",
        "SOCKS 36.255.98.178:6964",
        "SOCKS 36.255.98.153:10101",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}