function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.130.52.194:8118",
        "SOCKS 151.242.133.238:1080",
        "SOCKS 157.180.121.252:28128",
        "SOCKS 36.79.177.187:8080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 117.74.65.207:443",
        "SOCKS 103.167.219.82:8080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 152.53.36.101:45035",
        "SOCKS 82.200.235.134:19170",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 200.48.35.123:999",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 152.53.36.101:27147",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 189.50.45.46:1995",
        "SOCKS 150.227.4.147:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}