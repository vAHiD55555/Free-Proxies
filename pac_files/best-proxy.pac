function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.64.130:16379",
        "SOCKS 72.10.160.91:13103",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 128.140.76.145:10000",
        "SOCKS 1.52.27.45:443",
        "SOCKS 203.189.154.129:1080",
        "SOCKS 101.32.34.4:8118",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 78.12.220.164:32090",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 103.86.131.62:80",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 104.206.98.154:3128",
        "SOCKS 203.189.152.142:1080",
        "SOCKS 203.189.137.127:1080",
        "SOCKS 222.129.32.188:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}