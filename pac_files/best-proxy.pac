function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.27.11.248:8561",
        "SOCKS 103.81.194.124:8080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 116.98.187.72:1022",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 109.120.133.3:1200",
        "SOCKS 103.126.238.253:8080",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 103.141.67.50:51935",
        "SOCKS 103.82.22.5:10007",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 45.91.201.100:8082",
        "SOCKS 103.112.53.211:6314",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 187.111.144.102:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}