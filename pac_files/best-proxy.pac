function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.158.8.123:3128",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 14.177.149.91:16000",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 102.209.56.21:80",
        "SOCKS 58.186.248.123:16000",
        "SOCKS 58.186.248.96:16000",
        "SOCKS 140.238.184.182:3128",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 27.79.201.43:16000",
        "SOCKS 42.118.225.165:16000",
        "SOCKS 116.103.133.168:1009",
        "SOCKS 27.79.184.214:16000",
        "SOCKS 47.83.112.163:8888",
        "SOCKS 42.113.54.9:16000",
        "SOCKS 144.76.159.121:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}