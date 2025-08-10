function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.209.63.67:8173",
        "SOCKS 173.209.63.69:8111",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 89.169.37.76:3128",
        "SOCKS 97.79.251.186:80",
        "SOCKS 212.110.188.193:34409",
        "SOCKS 210.87.125.146:8090",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 192.177.33.68:8000",
        "SOCKS 135.181.213.184:40027",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 103.82.22.5:10007",
        "SOCKS 103.147.118.240:8080",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 116.98.187.95:1014",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}