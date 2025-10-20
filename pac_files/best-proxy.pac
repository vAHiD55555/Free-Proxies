function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 41.189.171.186:8080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 185.93.89.183:8089",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 103.72.89.33:8097",
        "SOCKS 185.93.89.183:5964",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 78.12.193.250:16010",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 62.213.13.54:3128",
        "SOCKS 47.243.173.32:1011",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 185.93.89.168:8009",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 172.104.240.74:9053",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}