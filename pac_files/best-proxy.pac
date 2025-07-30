function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.110.188.213:34411",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 179.60.53.25:999",
        "SOCKS 185.105.230.45:3128",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 57.128.188.167:8085",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 27.79.206.122:16000",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 117.250.3.58:8080",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 147.75.34.105:443",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 195.158.8.123:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}