function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.184:10620",
        "SOCKS 36.255.98.163:9443",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 36.255.98.177:7064",
        "SOCKS 36.255.98.180:7830",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 200.48.35.126:999",
        "SOCKS 36.255.98.184:8088",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 89.104.102.209:58080",
        "SOCKS 152.53.171.242:11888",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 36.255.98.175:9073",
        "SOCKS 62.60.131.183:9077",
        "SOCKS 195.189.142.132:80",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 152.53.171.242:39453",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}