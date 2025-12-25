function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 143.110.217.153:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 202.40.179.186:64564",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 82.115.24.134:9090",
        "SOCKS 103.189.218.158:1080",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 140.238.52.209:7890",
        "SOCKS 51.222.241.8:42378",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}