function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.203.139.209:5678",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 65.108.203.37:18080",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 14.172.146.19:20399",
        "SOCKS 185.93.89.145:4103",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 35.161.94.92:1080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 27.79.170.135:16000",
        "SOCKS 103.141.106.142:6969",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 192.177.139.195:8000",
        "SOCKS 5.181.178.69:8080",
        "SOCKS 8.212.151.166:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}