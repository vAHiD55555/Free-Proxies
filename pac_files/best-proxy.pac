function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.183:11386",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 36.255.98.175:8011",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 62.60.131.178:27642",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 36.255.98.156:7878",
        "SOCKS 62.60.131.180:24652",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 135.181.203.208:80",
        "SOCKS 37.192.133.82:1080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 36.255.98.177:4245",
        "SOCKS 62.60.131.189:15302",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 45.144.234.129:53434",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 36.255.98.160:4569",
        "SOCKS 43.131.9.114:1777",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}