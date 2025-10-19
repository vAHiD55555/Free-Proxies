function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.6.9.176:8072",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 36.147.78.166:80",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 168.181.191.153:7080",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 179.96.28.58:80",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 212.124.22.245:1080",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 212.87.213.72:16894",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 103.141.66.78:8008",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}